export default {
  widgets: [
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
                  buildHookId: '5eda67759834a367d800324d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g8jh63fp',
                  apiId: 'c71794a5-c484-46c6-849e-9a5bfc5dc65c'
                },
                {
                  buildHookId: '5eda6775d27792b6de4e4862',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d9opoc7m',
                  apiId: '44f0e428-f35e-4b49-9ca8-1f7e8efef9fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mdings/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d9opoc7m.netlify.app', category: 'apps'}
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
