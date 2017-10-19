%%
dot

digraph
apply
{
    label = 'Ecommerce Angular Portal'
    rankdir = LR;
    fontname = Helvetica
    node[fontname = Helvetica, width = 1.8, height = 0.8]
    edge[fontname = Helvetica, fontsize = 12, fontcolor = blue, labeldistance = 1.8]
    rank = same

    {
        ranksep = equally
        partner2[style = invis]
        shared2[style = invis]
        customer2[style = invis]
        partner2 -> shared2 -> customer2[style = 'invis']
    }


    subgraph
    cluster_customer
    {
        label = 'Customer'

        customerAnchor[style = invis]
        customer2 -> customerAnchor[style = 'invis'
        constraint = false
    ]

        subgraph
        cluster_purchase
        {
            label = 'Purchase'

            subgraph
            cluster_funnel
            {
                label = 'Purchase Funnel'

                billing[shape = box, label = 'Billing Information']
                confirm[shape = box, label = 'Confirmation']
                funnelFooter[shape = box, label = 'Footer']
                subtotal[shape = box, label = 'Subtotal']
                tracker[shape = box, label = 'Progress Tracker']

                {
                    rank = same
                    billing
                    confirm
                    funnelFooter
                }
            ->
                {
                    rank = same
                    subtotal
                    tracker
                }
                [style = invis]
            }

            productDescription[shape = box, label = 'Product Description']
            productSummary[shape = box, label = 'Product Summary']
            productTile[shape = box, label = 'Product Tile']
            productTiles[shape = box, label = 'Product Tiles']

            {
                rank = same
                productDescription
                productSummary
            }
        ->
            {
                rank = same
                productTile
                productTiles
            }
            [style = invis]
        }


        subgraph
        cluster_pages
        {
            label = 'Pages'

            contact[shape = box, label = 'Contact']
            demo[shape = box, label = 'Confirmation']
            home[shape = box, label = 'Home']
            trial[shape = box, label = 'Trial']

            {
                rank = same
                contact
                demo
            }
        ->
            {
                rank = same
                home
                trial
            }
            [style = invis]
        }

    }

    subgraph
    cluster_partner
    {
        label = 'Partner'

        customers[shape = box, label = 'Customers']
        subscriptions[shape = box, label = 'Subscriptions']
        invoices[shape = box, label = 'Invoices']
        billingOptions[shape = box, label = 'Billing']

        partnerAnchor[style = invis]
        partner2 -> partnerAnchor[style = 'invis'
        constraint = false
    ]

    }


    subgraph
    cluster_shared
    {
        label = 'Shared Components'

        sharedAnchor[style = invis]
        shared2 -> sharedAnchor[style = 'invis'
        constraint = false
    ]

        subgraph
        cluster_auth
        {
            label = 'Auth'

            forgot[shape = box, label = 'Forgot Password']
            login[shape = box, label = 'Login']
            logout[shape = box, label = 'Logout']
            register[shape = box, label = 'Register']
            reset[shape = box, label = 'Reset Password']

            {
                rank = same
                forgot
                login
                logout
            }
        ->
            {
                rank = same
                register
                reset
            }
            [style = invis]
        }

        subgraph
        cluster_layout
        {
            label = 'Layout'

            accountLinks[shape = box, label = 'Account Login']
            footer[shape = box, label = 'Footer']
            language[shape = box, label = 'Language Select']
            menu[shape = box, label = 'Main Menu']
            support[shape = box, label = 'Support Menu']
            toolbar[shape = box, label = 'Toolbar']

            {
                rank = same
                accountLinks
                footer
                language
            }
        ->
            {
                rank = same
                menu
                support
                toolbar
            }
            [style = invis]
        }


        subgraph
        cluster_subscription
        {
            label = 'Subscription'

            actTiles[shape = box, label = 'Tiles']
            actemarketing[shape = box, label = 'EMarketing']
            actpremium[shape = box, label = 'Act Premium']
            actpremiumcloud[shape = box, label = 'Act Premium Cloud']
            actpro[shape = box, label = 'Act Pro']
            handheld[shape = box, label = 'Handheld Contact']
            subscription[shape = box, label = 'Subscription']
            support[shape = box, label = 'Support']

            {
                rank = same
                actTiles
                actemarketing
                actpremium
                actpremiumcloud
            }
        ->
            {
                rank = same
                actpro
                handheld
                subscription
                support
            }
            [style = invis]
        }

    }

    partnerAnchor -> sharedAnchor -> customerAnchor[style = 'invis'
    minlen = 3
]
}

