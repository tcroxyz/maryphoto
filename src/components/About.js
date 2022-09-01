import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import bgimage from "../Images/headerbg.jpg";

function About() {
  return (
    <MainAbout>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="500"
          image={bgimage}
          alt="Mary Mac"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About Mary
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
            excepturi at optio perferendis unde quidem quisquam quod aliquam
            aliquid aperiam repellat. Dolore cum rerum eligendi!
          </Typography>
        </CardContent>
      </Card>
      <LeftCard>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Something
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              dicta reprehenderit minima provident, vitae vel, distinctio earum
              magni blanditiis architecto delectus soluta non quae eveniet sequi
              aperiam iure maiores eligendi, velit possimus error fugit tempore?
              Et, ducimus repellat deserunt odio repellendus vel eligendi ex
              sequi vero reiciendis nesciunt, vitae odit ullam dolorem ipsa.
              Recusandae saepe nobis fugiat ut tempora. Cupiditate nam
              exercitationem dolores doloremque sequi ea culpa assumenda,
              aliquid ratione quae dignissimos maxime iure veritatis tempora
              distinctio necessitatibus? Officiis tempora necessitatibus iste
              illum. Nesciunt alias libero, sapiente consequatur, aperiam
              adipisci repudiandae reprehenderit ipsa ab esse et quis soluta
              enim. Perferendis.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </LeftCard>
    </MainAbout>
  );
}

export default About;

const MainAbout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 5rem;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const LeftCard = styled.div`
  justify-content: center;
  align-items: stretch;
  display: flex;

  @media (max-width: 900px) {
    padding-top: 1rem;
  }
`;
