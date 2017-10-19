var last_id = '';
var clear_queued = false;
console_log = function (arg) {
    $('#output').append('<p>' + arg + '</p>');
}

function execute(code) {
    var res = kk.execute(code, {
        iopub: {
            output: function (msg) {
                // see static/notebook/js/outputarea.js:handle_output
                if (msg.header.msg_type === 'stream') {
                    $('#output').append('<p>' + msg.content.data + '</p>');
                } else if (msg.header.msg_type === 'display_data') {
                    $('#output').append('<p>' + msg.content.data + '</p>');
                } else if (msg.header.msg_type === 'execute_result') {
                    if (msg.content.data['text/plain'] !== undefined) {
                        $('#output').append('<p><strong>' + msg.content.data['text/plain'] + '</strong></p>');
                    }
                } else if (msg.header.msg_type === 'error') {
                    $('#output')
                        .append('<p style=\'color:red\'>' + msg.content.ename + ': ' + msg.content.evalue + '</p>');
                } else {
                    console.log('unhandled output message', msg);
                }
            },
            clear_output: function (msg) {
                if (msg.content.wait) {
                    if (clear_queued) {
                        $('#output').html('');
                        $('#widgets').html('');
                    }
                    clear_queued = true;
                } else {
                    $('#output').html('');
                    $('#widgets').html('');
                }
            }
        }
    }, {silent: false, store_history: true});
    last_id = res;
}

function js_execute(code) {
    $('#output').append('<p><strong>' + eval(code) + '</strong></p>');
}

require(
    ['base/js/events',
        'services/kernels/js/kernel',
        'notebook/js/keyboardmanager'],
    function (events_, kernel_, keyboardmanager_) {
        // leak variables into global scope
        events = events_;
        kernel = kernel_;
        keyboardmanager = keyboardmanager_;
        var keyboard_manager = new keyboardmanager.KeyboardManager({
            pager: null,
            events: events
        });
        if (window.parent !== window) {
            kernel_id = window.parent.IPython.notebook.session.kernel.kernel_id;
        } else {
            kernel_id = 'a4142958-41ed-4fe3-bea7-2a9bbd4db6bc';
        }
        false_cell = {
            widget_subarea: $('#widgets') // jQuery object to div
        };
        false_notebook = {
            events: events,
            keyboard_manager: keyboard_manager,
            get_msg_cell: function (msg_id) {
                if (msg_id === last_id) {
                    return false_cell;
                } else {
                    return null;
                }
            }
        };
        kk = new kernel.Kernel('/api/kernels', 'ws://127.0.0.1:8888', false_notebook, 'python2')
        kk._kernel_started({id: kernel_id, name: 'python2'});
        events.one('status_idle.Kernel', function (evt, data) {
            if (data.kernel === kk) {
                if (window.parent !== window && window.parent._subframe_cb !== undefined) {
                    window.parent._subframe_cb(execute);
                }
                console.log = console_log;
            }
        });
    });
