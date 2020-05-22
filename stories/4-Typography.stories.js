import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { MLTypography } from '@marklogic/design-system'

export default {
  title: 'General/MLTypography',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const example = () => (
  <MLTypography>
    <MLTypography.MLTitle>Introduction</MLTypography.MLTitle>
    <MLTypography.MLParagraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </MLTypography.MLParagraph>
    <MLTypography.MLParagraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
      <MLTypography.MLText strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development
      </MLTypography.MLText>
      .
    </MLTypography.MLParagraph>
    <MLTypography.MLTitle level={2}>Guidelines and Resources</MLTypography.MLTitle>
    <MLTypography.MLParagraph>
      We supply a series of design principles, practical patterns and high quality design resources
      (<MLTypography.MLText code>Sketch</MLTypography.MLText> and <MLTypography.MLText code>Axure</MLTypography.MLText>), to help people create their product
      prototypes beautifully and efficiently.
    </MLTypography.MLParagraph>

    <MLTypography.MLParagraph>
      <ul>
        <li>
          <a href='/docs/spec/proximity'>Principles</a>
        </li>
        <li>
          <a href='/docs/pattern/navigation'>Patterns</a>
        </li>
        <li>
          <a href='/docs/resource/download'>Resource Download</a>
        </li>
      </ul>
    </MLTypography.MLParagraph>
  </MLTypography>
)

export const titles = () => (
  <div>
    <MLTypography.MLTitle>h1. Ant Design</MLTypography.MLTitle>
    <MLTypography.MLTitle level={2}>h2. Ant Design</MLTypography.MLTitle>
    <MLTypography.MLTitle level={3}>h3. Ant Design</MLTypography.MLTitle>
    <MLTypography.MLTitle level={4}>h4. Ant Design</MLTypography.MLTitle>
  </div>
)

export const text = () => (
  <div>
    <MLTypography.MLText>Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText type="secondary">Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText type="warning">Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText type="danger">Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText disabled>Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText mark>Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText code>Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText underline>Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText delete>Ant Design</MLTypography.MLText>
    <br />
    <MLTypography.MLText strong>Ant Design</MLTypography.MLText>
  </div>
)
