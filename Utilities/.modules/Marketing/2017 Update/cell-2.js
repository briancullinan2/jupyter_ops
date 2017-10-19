%%
dot

digraph
apply
{
    label = '2017 Updated'
    rankdir = LR;
    fontname = Helvetica
    node[fontname = Helvetica, width = 1.8, height = 0.8]
    edge[fontname = Helvetica, fontsize = 12, fontcolor = blue, labeldistance = 1.8]

    start [shape = box, style = rounded, label = 'Register New\nCustomer'];
    selectrp[shape = 'box', label = 'Select Rate Plan'];

    subgraph
    cluster_available_plans
    {
        label = 'Available Plans'
        style = filled;
        fillcolor = grey92
        rank = same;
        monthly    [shape = box, label = 'Act! Premium 2017\nUpdate - Monthly\nSubscription\n$30']
        annual     [shape = box, label = 'Act! Premium 2017\nUpdate - Annual\nSubscription\n$300']
        perpetual  [shape = box, label = 'Act! Premium 2017\nUpdate - Perpetual\nLicense\n$600']
        year2      [shape = box, label = 'Act! Premium 2017\nUpdate - Annual\nSubscription (2 Year\nContract)\n$540']
    }

    upgrade[shape = 'diamond', label = 'Upgrade\nNew\nCustomer', rank = min];

    node [shape = box];
    {
        start->selectrp->upgrade [color = invis];
        rankdir = LR;
    }

    start:e -> selectrp
:
    w
    selectrp:e -> monthly
:
    w
    selectrp:e -> annual
:
    w
    selectrp:e-> perpetual
:
    w
    selectrp:e -> year2
:
    w
    monthly:e -> upgrade
:
    w
    annual:e -> upgrade
:
    w
    perpetual:e -> upgrade
:
    w
    year2:e -> upgrade
:
    w
    upgrade:s -> selectrp
:
    s
}