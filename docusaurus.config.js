module.exports = {
    title: 'Crypto Colosseum',
    tagline: 'A crypto game of degenerate gambling and whimsical violence.',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'quorumcontrol', // Usually your GitHub org/user name.
    projectName: 'cryptocolosseum-docs', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Home',
            logo: {
                alt: 'Home',
                src: 'img/logo.svg',
            },
        },
        footer: {
            style: 'dark',
            links: [{
                title: 'Community',
                items: [{
                        label: 'Discord',
                        href: 'https://discord.gg/Z2S3EtQKCn',
                    },
                    {
                        label: 'Twitter',
                        href: 'https://twitter.com/cryptocolosseum',
                    },
                    {
                        'html': '<script data-host="https://statonics.com" data-dnt="false" src="https://statonics.com/js/script.js" id="ZwSg9rf6GA" async defer></script>',
                    }
                ],
            }, ],
            copyright: `Copyright © ${new Date().getFullYear()} Quorum Control GmbH.`,
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: "dark",

            disableSwitch: true,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: '🌙',

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: '\u{1F602}',

                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    routeBasePath: '/',
                    editUrl: 'https://github.com/quorumcontrol/cryptocolosseum-docs/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};