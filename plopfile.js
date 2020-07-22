module.exports = function (plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'ML component wrapper',
    prompts: [{
      type: 'input',
      name: 'issueNumber',
      message: 'Jira issue number',
    }, {
      type: 'input',
      name: 'componentCategory',
      message: 'Ant component category',
    }, {
      type: 'input',
      name: 'parentAntComponentName',
      message: 'Ant component name',
    }, {
      type: 'input',
      name: 'childAntComponentNames',
      message: 'Child Ant component names (separated by spaces)',
    }],
    actions: function(data) {
      data.parentAntComponentName = data.parentAntComponentName.replace(/ML/, '')
      data.childAntComponentNames = data.childAntComponentNames.replace(/ML/g, '').split(' ').filter((n) => n !== '')
      const actions = []
      actions.push({
        type: 'add',
        path: 'src/ML{{parentAntComponentName}}/ML{{parentAntComponentName}}.js',
        templateFile: 'plop-templates/component-wrapper.hbs',
        abortOnFail: false,
      })
      actions.push({
        type: 'add',
        path: 'src/ML{{parentAntComponentName}}/index.js',
        templateFile: 'plop-templates/component-index-file.hbs',
        abortOnFail: false,
      })
      for (const childAntComponentName of data.childAntComponentNames) {
        actions.push({
          data: {
            parentAntComponentName: data.parentAntComponentName,
            childAntComponentName: childAntComponentName,
          },
          type: 'add',
          path: 'src/ML{{parentAntComponentName}}/ML{{childAntComponentName}}.js',
          templateFile: 'plop-templates/child-component-wrapper.hbs',
          abortOnFail: false,
        })
      }
      actions.push({
        type: 'add',
        path: 'src/ML{{parentAntComponentName}}/style/index.js',
        templateFile: 'plop-templates/style-index-js.hbs',
        abortOnFail: false,
      })
      actions.push({
        type: 'add',
        path: 'src/ML{{parentAntComponentName}}/style/index.less',
        templateFile: 'plop-templates/style-index-less.hbs',
        abortOnFail: false,
      })
      actions.push({
        type: 'add',
        path: 'stories/{{issueNumber}}-{{parentAntComponentName}}.stories.jsx',
        templateFile: 'plop-templates/story.hbs',
        abortOnFail: false,
      })
      console.log(JSON.stringify(data, null, '  '))
      actions.push({
        data: {
          ...data,
          version4: data.parentAntComponentName === 'Icon',
        },
        type: 'add',
        path: 'stories/{{issueNumber}}-{{parentAntComponentName}}.mdx',
        templateFile: 'plop-templates/docs.hbs',
        abortOnFail: false,
      })

      return actions
    },
  })
}
