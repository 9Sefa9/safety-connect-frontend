import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kunststoffband from '../../assets/images/kunststoffband.png'
import Kabelmesser from '../../assets/images/Kabelmesser.png'
import { Box } from '@mui/material';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
export default function Home() {
  return (
    <>
      <FullScreenDialog />
      <Box sx={{ overflow: 'scroll', height: '90%' }}>
        <Card variant="outlined">
          <Box sx={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', overflowX: 'scroll', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', gap: '1rem' }}>
            <CardMedia
              component="img" // Verwendet das img-Tag, um die natürliche Bildgröße beizubehalten
              image={kunststoffband}
              title="Unfall - Kunststoffband"
              sx={{
                height: 600,
                objectFit: 'contain', // Verhindert das Zuschneiden des Bildes und behält die natürliche Größe bei
              }}
            />
            <CardMedia
              component="img" // Verwendet das img-Tag, um die natürliche Bildgröße beizubehalten
              image={Kabelmesser}
              title="Unfall - Kunststoffband"
              sx={{
                height: 600,
                objectFit: 'contain', // Verhindert das Zuschneiden des Bildes und behält die natürliche Größe bei
              }}
            />
          </Box>
          <CardContent>
            <hr />
            <Typography gutterBottom variant="h4" >
              <strong>Was ist passiert ?</strong>
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.primary' }}>
              <em>Vorfall</em>: Beim Auspacken eines Pakets im Schneidzentrum 5 schnitt der Mitarbeiter die Kunststoffbänder mit einem Kabelmesser durch. Anschließend wollte er die Kunststoffbänder unter der Palette herausziehen. Dabei hielt er das Kabelmesser in der anderen Hand und zog sich eine tiefe Schnittwunde am Finger zu, die mit sechs Stichen genäht werden musste. Der Mitarbeiter trug keine Schutzhandschuhe.
              Der Angestellte wurde im Umgang mit Sicherheitsmessern beim Auspacken von Paketen geschult.
            </Typography>
            <Typography variant="h6" sx={{ color: 'red' }}>
              <strong>Verletzung: Schnittwunde am rechten Ringfinger.</strong>
            </Typography>
            <hr />
            <Typography gutterBottom variant="h4" >
              <strong>Was war der Grund ?</strong>
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.primary' }}>
              <ul>
                <li>Falsches Messer verwendet</li>
                <li>Keine Schutzhandschuhe getragen</li>
                <li>Fehlverhalten des Mitarbeiters</li>
              </ul>
            </Typography>
            <hr />
            <Typography gutterBottom variant="h4" >
              <strong>Wie können wir das vermeiden ?</strong>
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.primary' }}>
              <ul>
                <li>Mitarbeitergespräch führen</li>
                <li>Messerplan beachten</li>
                <li>Erneute Schulung</li>
              </ul>
            </Typography>
            <hr />
          </CardContent>
          {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
      </Box>
    </>
  );
}