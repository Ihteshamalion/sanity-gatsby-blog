export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff94cf50b76297fc7030cf5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ahec91bv',
                  apiId: '13429aac-bb3f-48c7-8c8b-f59d6053341b'
                },
                {
                  buildHookId: '5ff94cf534de3f85e3123b44',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d2rxg51x',
                  apiId: '4a1b6a30-62ac-486b-a128-4ffef85c03c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ihteshamalion/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d2rxg51x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
