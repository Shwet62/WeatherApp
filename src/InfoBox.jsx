import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const imgUrl =
    "https://img.freepik.com/premium-vector/colorful-weather-icon-set-weather-icons-web-forecast-weather-flat-symbols-meteorology-climate-design-elements-isolated-white-backgroundcontains-icons-sun-clouds-rain-moon_646072-215.jpg";

  if (!info) {
    return <div className="InfoBox">No weather data to display</div>;
  }

  return (
    <div className="InfoBox">
      <h1 className="infoTitle">Weather Information</h1>
      <Card className="weatherCard" sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="200"
          image={imgUrl}
          alt={info.weather}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {info.city}
          </Typography>
          <Typography variant="body1" component="div" className="weatherDetails">
            <p>
              <strong>Temperature:</strong> {info.temp}°C
            </p>
            <p>
              <strong>Humidity:</strong> {info.humidity}%
            </p>
            <p>
              <strong>Min Temp:</strong> {info.tempMin}°C
            </p>
            <p>
              <strong>Max Temp:</strong> {info.tempMax}°C
            </p>
            <p>
              <strong>Condition:</strong> <i>{info.weather}</i>
            </p>
            <p>
              <strong>Feels Like:</strong> {info.feelsLike}°C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
