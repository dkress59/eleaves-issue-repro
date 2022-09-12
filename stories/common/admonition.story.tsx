import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import React from 'react'

import { Admonition } from ':common/components/admonition'
import { AdmonitionProps } from ':common/types'

import { containerDecorator } from '../decorators'

export default {
	title: 'Common/Admonition',
	component: Admonition,
	decorators: [containerDecorator('Admonition')],
} as ComponentMeta<typeof Admonition>

const Template: ComponentStory<typeof Admonition> = args => (
	<Admonition {...args} />
)

export const Default = Template.bind({}) as StoryObj<AdmonitionProps>
Default.args = {
	children:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis placeat fugiat similique molestias ipsam a quod, eos unde reprehenderit deserunt iste ab eum deleniti ullam beatae, omnis dignissimos adipisci.',
}

export const Truncated = Template.bind({}) as StoryObj<AdmonitionProps>
Truncated.args = {
	className: 'truncated',
	children: (
		<>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Commodi optio expedita nemo pariatur nam, qui eum vitae, ut
				natus temporibus explicabo maxime dicta quisquam, quod possimus
				non id. Aperiam, tempora.
			</p>
			<p>
				Dicta consectetur aspernatur quisquam, veniam unde error
				placeat, earum doloremque accusamus deleniti, inventore ipsam ab
				odio! Obcaecati quasi tempora doloribus! Pariatur sequi unde ea
				illo natus dolor, corporis obcaecati perferendis.
			</p>
			<p>
				Reprehenderit officia corporis est suscipit quisquam laudantium
				fugit amet labore molestiae perferendis eaque nulla, expedita
				accusantium fuga incidunt laborum rem? Alias cupiditate aliquam
				repellendus officiis tempora, voluptas dolores aliquid sit.
			</p>
			<p>
				Explicabo odio facilis atque repellat, quod qui illum velit
				dignissimos quibusdam ad, vero pariatur ullam maiores cum
				cupiditate consequuntur fuga nulla blanditiis, aut mollitia
				deleniti quisquam culpa. Minima, reiciendis mollitia.
			</p>
			<p>
				Adipisci culpa facilis necessitatibus quam? Impedit corrupti
				expedita velit animi, dicta perferendis. Vitae sunt accusantium
				praesentium, dicta non commodi quo officiis quam facilis
				nesciunt exercitationem laudantium necessitatibus soluta
				provident. Magni!
			</p>
			<p>
				Dicta voluptates ab, autem libero voluptas reprehenderit
				aspernatur reiciendis alias provident deserunt nihil sint ea non
				amet, molestiae molestias eum maiores exercitationem laborum
				illo placeat harum? Illum delectus voluptate amet!
			</p>
			<p>
				Natus dolore corrupti perferendis quis voluptates ullam illo
				aperiam quo quisquam inventore sunt error, iure dignissimos
				expedita asperiores vero accusantium sit explicabo dolores
				laborum est iusto! Laudantium consequatur exercitationem sit!
			</p>
			<p>
				Eligendi nulla vel vitae est dicta quam, consectetur, rerum
				harum tempore officiis velit. Ipsam fuga ipsum blanditiis alias
				perferendis! Suscipit, ad accusantium! Impedit, dolor officiis.
				Facere totam temporibus excepturi veniam?
			</p>
		</>
	),
}

export const ContentTypes = Template.bind({}) as StoryObj<AdmonitionProps>
ContentTypes.args = {
	children: (
		<>
			<h3>Some h3 Headline</h3>

			<p>
				<a href="https://duckduckgo.com">Some Link</a>
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Aliquid aperiam ut est, provident, magni ipsum rerum hic
				blanditiis fuga consequatur laboriosam dignissimos sint, illum
				quae vitae cum perspiciatis animi expedita!
			</p>

			<h4>Some h4 headline</h4>

			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
				et tenetur nostrum ratione commodi autem, accusamus nisi
				corrupti omnis impedit, libero, labore velit. Modi
				necessitatibus autem nulla quod voluptatibus aperiam?
			</p>

			<ul>
				<li>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Beatae consequatur voluptate excepturi eius doloribus cumque
					corrupti modi velit, repellendus, optio iure quasi quae,
					autem laboriosam nesciunt saepe mollitia aut sed.
				</li>
				<li>
					Nemo magni officiis provident sed enim sint aliquid adipisci
					delectus ad tempore accusantium, quia, quaerat molestias
					similique iure blanditiis vel culpa. Laboriosam deleniti
					excepturi dolorem accusamus voluptate adipisci omnis amet.
					<ol>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Fugit quisquam veniam nulla odio accusantium
							ut dolor animi consequatur incidunt expedita.
							Aliquid minus iure expedita molestias rem omnis quia
							esse assumenda?
						</li>
						<li>
							Natus ullam, voluptatum in odit assumenda autem
							similique molestias odio porro iure dolores,
							laboriosam accusamus minima animi sit. Iste ducimus
							repellendus optio? Optio aspernatur officia est
							corrupti ad magnam non!
						</li>
					</ol>
				</li>
				<li>
					Omnis, provident. Molestiae architecto obcaecati ratione at
					ut. Porro quis doloremque laudantium consectetur in
					repellendus mollitia tempore earum omnis ipsam sequi
					officiis deleniti, aspernatur sunt laboriosam, nobis
					adipisci distinctio. Vitae!
				</li>
			</ul>

			<ol>
				<li>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Magnam rem necessitatibus inventore quidem impedit
					voluptatibus perspiciatis debitis aliquid voluptates numquam
					nemo ipsam consequatur obcaecati adipisci iusto, sapiente
					esse ullam sed.
				</li>
				<li>
					Provident quaerat excepturi veritatis mollitia? Quas
					perspiciatis ipsam iusto repudiandae laborum officia,
					ducimus aspernatur dolorum praesentium eos aperiam atque
					quaerat, fugit excepturi facere, ex minus. Adipisci illum ut
					quia ex.
				</li>
				<li>
					Perspiciatis, maiores quia sunt corporis officia quaerat
					sint rerum aperiam recusandae repudiandae. Facilis eaque
					voluptatibus consequatur ut et placeat quo quaerat? Ad fugit
					vero voluptatibus excepturi aperiam. Vel, consequuntur vero?
					<ul>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Neque maiores nam reprehenderit nulla sint
							officia, minima quibusdam quas, sapiente ab error?
							Aspernatur neque unde suscipit illum voluptatibus
							iure officia dolores!
						</li>
						<li>
							Accusamus asperiores, saepe veritatis voluptas sit
							voluptatum tempora necessitatibus aperiam unde
							dignissimos reiciendis animi consectetur architecto
							eaque, neque odit provident quaerat, temporibus
							incidunt laudantium doloremque harum quas! Eaque,
							deserunt doloremque?
						</li>
					</ul>
				</li>
			</ol>
		</>
	),
}
