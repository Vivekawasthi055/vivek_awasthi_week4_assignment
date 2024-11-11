import { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import jobsData from "../data/jobsData";
import Pagination from "../components/Pagination";
import "../style.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const indianCities = [
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Mumbai",
    "Gurugram",
    "Noida",
    "Kolkata",
    "Coimbatore",
    "Indore",
  ];

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location.includes(location))
  );

  const jobsPerPage = 6;
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <Container maxWidth="lg" className="home-page">
      <div className="filters">
        <Typography variant="h4" gutterBottom className="title">
          Find Your Dream Job
        </Typography>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={5}>
            <TextField
              label="Search Job"
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
              displayEmpty
              className="location-select"
            >
              <MenuItem value="">Select Location</MenuItem>
              {indianCities.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={2} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setCurrentPage(1)}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={3} className="job-list">
        {currentJobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="job-card">
              <CardContent>
                <Typography variant="h6" className="job-title">
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" className="company-name">
                  {job.company}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="job-location"
                >
                  {job.location}
                </Typography>
                <Typography variant="body2" className="job-description">
                  {job.description}
                </Typography>

                {/* View Details button */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="view-details-button"
                  onClick={() => navigate(`/job/${job.id}`)} // Navigates to detailed job page
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        totalJobs={filteredJobs.length}
        jobsPerPage={jobsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default HomePage;
