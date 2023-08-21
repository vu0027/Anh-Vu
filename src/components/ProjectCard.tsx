import styled from '@emotion/styled';
import Card from '@mui/material/Card'
import Typography from './Typography';

export interface ProjectCardProps {
	title?: string;
	description?: string;
	link?: string;
	technologies?: string[];
	image?: any;
	onClick?: () => void;
}

const BodyCard = styled.div`
	padding: 10%;
	background-color

`
const FooterCard = styled.div`
	padding: 0 5% 4% 5%;
`


const ProjectCard = ({
	title,
	description,
	link,
	technologies,
	image,
	onClick
}: ProjectCardProps) => {

	const projectImageUrl = process.env.PUBLIC_URL + image;

	return (
		<Card onClick={onClick} style={{ maxWidth: '550px', margin:'5%', backgroundColor: '#D9D9D9', cursor: 'pointer'}}>
			<BodyCard>
				<div>
					<img style={{width: '450px', height: '300px'}} src={projectImageUrl} alt={title + 'Image'} />
				</div>
			</BodyCard>
			<FooterCard>
				<Typography fontSize='15px'>{title}</Typography>
			</FooterCard>
		</Card>

	)
}

export default ProjectCard;