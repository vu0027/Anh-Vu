import styled from '@emotion/styled';
import Card from '@mui/material/Card'
import Typography from './Typography';

export interface ProjectCardProps {
	title?: string;
	description?: string;
	link?: string;
	technologies?: string[];
	image?: any;
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
}: ProjectCardProps) => {

	const projectImageUrl = process.env.PUBLIC_URL + image;

	return (
		<Card style={{ maxWidth:'350px', width: '80%', margin:'5%', backgroundColor: '#D9D9D9'}}>
			<BodyCard>
				<div>
          <img style={{width: '20%'}} src={projectImageUrl} alt={title + 'Image'} />
        </div>
			</BodyCard>
			<FooterCard>
				<Typography fontSize='15px'>{title}</Typography>
			</FooterCard>
		</Card>
	)
}

export default ProjectCard;