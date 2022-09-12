import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { Chapter } from ':common/components/chapter'
import { ChapterProps } from ':common/types'

import { containerDecorator } from '../decorators'

export default {
	title: 'Common/Chapter',
	component: Chapter,
	decorators: [containerDecorator('Chapter')],
} as ComponentMeta<typeof Chapter>

const Template: ComponentStory<typeof Chapter> = args => <Chapter {...args} />

export const Default = Template.bind({}) as StoryObj<ChapterProps>
Default.args = {
	children: (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
				tempore adipisci animi. Illum voluptatibus et odio dolores
				cupiditate ut rerum dolore suscipit laudantium dicta! Dolorem
				vitae officia in quae veritatis.
			</p>
			<p>
				Eius consequatur recusandae tenetur deleniti esse blanditiis
				laborum id magnam et quisquam deserunt omnis voluptatibus ullam
				modi numquam doloremque ex velit quas, quasi animi aliquid nisi
				delectus nemo rem! At!
			</p>
		</>
	),
}

export const WithTitle = Template.bind({}) as StoryObj<ChapterProps>
WithTitle.args = {
	title: 'Chapter title',
	children: (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
				tempore adipisci animi. Illum voluptatibus et odio dolores
				cupiditate ut rerum dolore suscipit laudantium dicta! Dolorem
				vitae officia in quae veritatis.
			</p>
			<p>
				Eius consequatur recusandae tenetur deleniti esse blanditiis
				laborum id magnam et quisquam deserunt omnis voluptatibus ullam
				modi numquam doloremque ex velit quas, quasi animi aliquid nisi
				delectus nemo rem! At!
			</p>
		</>
	),
}

export const Red = Template.bind({}) as StoryObj<ChapterProps>
Red.args = {
	className: 'red',
	children: (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
				tempore adipisci animi. Illum voluptatibus et odio dolores
				cupiditate ut rerum dolore suscipit laudantium dicta! Dolorem
				vitae officia in quae veritatis.
			</p>
			<p>
				Eius consequatur recusandae tenetur deleniti esse blanditiis
				laborum id magnam et quisquam deserunt omnis voluptatibus ullam
				modi numquam doloremque ex velit quas, quasi animi aliquid nisi
				delectus nemo rem! At!
			</p>
		</>
	),
}
export const Yellow = Template.bind({}) as StoryObj<ChapterProps>
Yellow.args = {
	className: 'yellow',
	children: (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
				tempore adipisci animi. Illum voluptatibus et odio dolores
				cupiditate ut rerum dolore suscipit laudantium dicta! Dolorem
				vitae officia in quae veritatis.
			</p>
			<p>
				Eius consequatur recusandae tenetur deleniti esse blanditiis
				laborum id magnam et quisquam deserunt omnis voluptatibus ullam
				modi numquam doloremque ex velit quas, quasi animi aliquid nisi
				delectus nemo rem! At!
			</p>
		</>
	),
}
export const Green = Template.bind({}) as StoryObj<ChapterProps>
Green.args = {
	className: 'green',
	children: (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
				tempore adipisci animi. Illum voluptatibus et odio dolores
				cupiditate ut rerum dolore suscipit laudantium dicta! Dolorem
				vitae officia in quae veritatis.
			</p>
			<p>
				Eius consequatur recusandae tenetur deleniti esse blanditiis
				laborum id magnam et quisquam deserunt omnis voluptatibus ullam
				modi numquam doloremque ex velit quas, quasi animi aliquid nisi
				delectus nemo rem! At!
			</p>
		</>
	),
}
export const Plain = Template.bind({}) as StoryObj<ChapterProps>
Plain.args = {
	className: 'plain',
	children: (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
				tempore adipisci animi. Illum voluptatibus et odio dolores
				cupiditate ut rerum dolore suscipit laudantium dicta! Dolorem
				vitae officia in quae veritatis.
			</p>
			<p>
				Eius consequatur recusandae tenetur deleniti esse blanditiis
				laborum id magnam et quisquam deserunt omnis voluptatibus ullam
				modi numquam doloremque ex velit quas, quasi animi aliquid nisi
				delectus nemo rem! At!
			</p>
		</>
	),
}
