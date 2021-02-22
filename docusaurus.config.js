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
                ],
            }, ],
            copyright: `Copyright © ${new Date().getFullYear()} Quorum Control GmbH.`,
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
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};