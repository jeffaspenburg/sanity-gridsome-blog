export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ecf078a89654a8eaa25de2b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-9est1rou',
                  apiId: '6dcdbe7e-fbb1-4d2f-978f-3aa9e13cb9e7'
                },
                {
                  buildHookId: '5ecf078a953f18a487419e30',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-q7ixccjn',
                  apiId: '7ce33b85-d44a-4049-ad5a-11db719941b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffaspenburg/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-q7ixccjn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
