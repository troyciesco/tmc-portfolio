import React from "react"
import { Section, Heading, Wrapper, FlexRow, FlexCol, Text, Img, Button } from "../base"
import { ReactLogo } from "./ReactLogo"
import nicabmLogo from "../img/nicabm.png"
import lendgerLogo from "../img/lendger.png"

const Projects = () => {
	return (
		<Section mt="sm" bg="#f4f4f4">
			<Wrapper contain>
				<Heading size="lg" pb="md" pt="md">
					Interesting Projects
				</Heading>
				<FlexRow pb="lg">
					<FlexCol xs="3">
						<Img src={nicabmLogo} height="300px" width="auto" />
					</FlexCol>
					<FlexCol xs="6">
						<Heading pb="xs" size="sm">
							NICABM
						</Heading>
						<Text size="lg" pb="md">
							Training for mental health professionals. Rebuilt with a team of 4 in summer 2018.
							Live site. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maxime
							non quia a qui at cum iusto quo voluptatem officia laudantium pariatur quibusdam,
							laboriosam saepe cupiditate alias repellat ratione ipsa! Vel corporis impedit quia
							fuga repudiandae ex officia tenetur autem, debitis ad possimus non voluptas.
						</Text>
						<Button>Visit Site</Button>
					</FlexCol>
				</FlexRow>
				<FlexRow pb="lg" pt="md">
					<FlexCol xs="3">
						<Img src={lendgerLogo} height="300px" width="auto" />
					</FlexCol>
					<FlexCol xs="6">
						<Heading pb="xs" size="sm">
							Lendger
						</Heading>
						<Text size="lg" pb="md">
							A blockchain-based real estate crowdfunding platfrom. Under production - private repo.
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maxime non quia a
							qui at cum iusto quo voluptatem officia laudantium pariatur quibusdam, laboriosam
							saepe cupiditate alias repellat ratione ipsa! Vel corporis impedit quia fuga
							repudiandae ex officia tenetur autem, debitis ad possimus non voluptas.
						</Text>
						<Button>Visit Site</Button>
					</FlexCol>
				</FlexRow>
				<FlexRow pb="lg" pt="md">
					<FlexCol xs="3">
						<ReactLogo height="300px" width="auto" />
					</FlexCol>
					<FlexCol xs="6">
						<Heading pb="xs" size="sm">
							Design System for React
						</Heading>
						<Text size="lg" pb="md">
							Hand-built component system with theming to make building React sites faster. This
							site uses a lot of its elements. Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Molestias maxime non quia a qui at cum iusto quo voluptatem officia laudantium
							pariatur quibusdam, laboriosam saepe cupiditate alias repellat ratione ipsa! Vel
							corporis impedit quia fuga repudiandae ex officia tenetur autem, debitis ad possimus
							non voluptas.
						</Text>
						<Button>Visit Repo</Button>
					</FlexCol>
				</FlexRow>
			</Wrapper>
		</Section>
	)
}

export { Projects }
