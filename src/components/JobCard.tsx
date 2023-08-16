import styled from "@emotion/styled";
import Card from "@mui/material/Card"
import Typography from "./Typography";

export interface JobCardProps {
	companyLogo?: any;
	companyName?: string;
	jobTitle?: string;
	jobDetails?: string[];
	startDate?: string;
	endDate?: string;
}

const HeaderCard = styled.div`
	display: flex;
	flex-direction: row;
	padding: 4% 5% 0 4%;
`

const BodyCard = styled.div`
	padding: 0 5% 0 5%;

`
const FooterCard = styled.div`
	padding: 0 5% 4% 5%;
`
const HorizontalLine = styled.div`
  width: 100%;
  border-top: 2px solid #ccc;
  margin-bottom: 10px;
`

const JobDetailsList = styled.ul`
	list-style-type: disc;
	padding-left: 10%;
	padding-right: 5%;
	padding-top: 5%;
	padding-bottom: 10%;
	font-size: 14px;
`

const JobCard = ({
	companyLogo,
	companyName = '',
	jobDetails = [],
	jobTitle,
	startDate,
	endDate = 'current'
}: JobCardProps) => {

	const companyLogoUrl = process.env.PUBLIC_URL + companyLogo;

	return (
		<Card style={{ maxWidth:'350px', minHeight: '300px', width: '80%', margin:'5%'}}>
			<HeaderCard>
				<div>
          <img style={{width: '50%'}} src={companyLogoUrl} alt={companyName} />
        </div>
			</HeaderCard>
			<HorizontalLine />
			<BodyCard>
				<Typography color={'blue'} bold>{jobTitle}</Typography>
				<JobDetailsList>
					{jobDetails.map((detail, detailIndex) => (
						<li key={detailIndex}>{detail}</li>
					))}
				</JobDetailsList>
			</BodyCard>
			<HorizontalLine />
			<FooterCard>
				<Typography fontSize="15px">{startDate + ' - ' + endDate}</Typography>
			</FooterCard>
		</Card>
	)
}

export default JobCard;