#include <CoreFoundation/CoreFoundation.h>
#include <CoreGraphics/CoreGraphics.h>

#if __cplusplus
extern "C" {
#endif

typedef enum {
  kButtonLeft = 0,
  kButtonRight = 1,
} Button;

CGEventType previous_event_;
int event_number_ = 32000;

__attribute__((visibility("default")))
int main(int argc, char *argv[])
{
    previous_event_ = kCGEventNull;
}

void DispatchMouseEvent(CGMouseButton button, CGEventType type, CGPoint position, uint32_t click_count, uint32_t delay)
{
    if (previous_event_ == kCGEventMouseMoved || previous_event_ == kCGEventLeftMouseDragged)
    {
        usleep(delay);
    }

    event_number_++;
    CGEventRef event = CGEventCreateMouseEvent(NULL, type, position, button);
    CGEventSetType(event, type);
    CGEventSetIntegerValueField(event, kCGMouseEventNumber, event_number_);
    CGEventSetIntegerValueField(event, kCGMouseEventClickState, click_count);
    CGEventPost(kCGHIDEventTap, event);
    CFRelease(event);
    previous_event_ = type;
    usleep(delay);
}

CGPoint GetMousePosition()
{
    usleep(200000);
    CGEventRef event = CGEventCreate(NULL);
    CGPoint cursor = CGEventGetLocation(event);
    CFRelease(event);
    return cursor;
}

void SetMousePosition(float x, float y)
{
    CGPoint position = CGPointMake(x, y);
    DispatchMouseEvent(kCGMouseButtonLeft, kCGEventMouseMoved, position, 1, 0);
    previous_event_ = kCGEventMouseMoved;
}

void SetPosition(CGPoint position)
{
    DispatchMouseEvent(kCGMouseButtonLeft, kCGEventMouseMoved, position, 1, 0);
    previous_event_ = kCGEventMouseMoved;
}

void SetButtonState(Button btn, bool is_pressed, CGPoint position, int click_count)
{
    CGEventType type;
    CGMouseButton button;

    switch (btn)
    {
    case kButtonLeft:
        type = (is_pressed ? kCGEventLeftMouseDown : kCGEventLeftMouseUp);
        button = kCGMouseButtonLeft;
        break;

    case kButtonRight:
        type = (is_pressed ? kCGEventRightMouseDown : kCGEventRightMouseUp);
        button = kCGMouseButtonRight;
        break;
    };

    DispatchMouseEvent(button, type, position, click_count, 200000);
}

void MouseClick(Button btn, CGPoint position)
{
    SetButtonState(btn, true, position, 1);  // Press
    SetButtonState(btn, false, position, 1); // Release
}

void Click(Button btn)
{
    CGPoint position = GetMousePosition();
    MouseClick(btn, position);
}

void MouseDoubleClick(Button btn, CGPoint position)
{
    SetButtonState(btn, true, position, 1);
    SetButtonState(btn, false, position, 1);
    SetButtonState(btn, true, position, 2);
    SetButtonState(btn, false, position, 2);
}

void DoubleClick(Button btn)
{
    CGPoint position = GetMousePosition();
    MouseDoubleClick(btn, position);
}

void MouseDrag(CGPoint position)
{
    DispatchMouseEvent(kCGMouseButtonLeft, kCGEventLeftMouseDragged, position, 1, 0);
}

void MouseStartDrag(CGPoint position)
{
    SetButtonState(kButtonLeft, true, position, 1);
    MouseDrag(position);
}

void MouseEndDrag(CGPoint position)
{
    MouseDrag(position);
    SetButtonState(kButtonLeft, false, position, 1);
}


#if __cplusplus
}
#endif

