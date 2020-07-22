/** Usage:
 *  0. `yarn global add plop` or `npm install -g plop`
 *  1a. Just run "plop" and type in the arguments as prompted
 *  1b. or, pass in the arguments as space-separate command line arguments:
 *    plop component  4 "General" MLTypography "MLText MLTitle MLParagraph"
 *    - 4 corresponds to UX-4
 *    - "General" Corresponds to the category the Ant component is in on the Ant documentation sidebar
 *    - MLTypography is the name of the main component
 *    - "MLText MLTitle MLParagraph" is the name of all child components (eg MLTypography.MLText)
 */

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
