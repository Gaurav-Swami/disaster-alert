import express from "express";
import request from "request"; // Import the request package
import cors from "cors";
import "dotenv/config"; // Load environment variables
import bodyParser from "body-parser";
import https from "https"; // Import the https module

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT;

// Route to fetch disaster-related articles
app.get("/disasters", (req, res) => {
  request.post(
    {
      url: "https://www.newsapi.ai/api/v1/article/getArticles",
      json: {
        query: {
          $query: {
            $and: [
              {
                categoryUri:
                  "dmoz/Science/Earth_Sciences/Natural_Disasters_and_Hazards",
              },
              {
                locationUri: "http://en.wikipedia.org/wiki/India",
              },
              {
                dateStart: "2024-08-29",
                dateEnd: "2024-09-05",
                lang: "eng",
              },
            ],
          },
        },
        resultType: "articles",
        articlesSortBy: "date",
        includeArticleSocialScore: true,
        includeArticleConcepts: true,
        includeArticleCategories: true,
        includeArticleLocation: true,
        includeArticleImage: true,
        includeArticleVideos: true,
        includeArticleLinks: true,
        includeArticleExtractedDates: true,
        includeArticleDuplicateList: true,
        includeArticleOriginalArticle: true,
        includeConceptLabel: false,
        includeConceptTrendingScore: true,
        includeSourceTitle: false,
        apiKey: process.env.NEWS_API_KEY, // Use environment variable for API key
      },
    },
    (error, response, body) => {
      if (error) {
        console.error("Error fetching disaster articles:", error);
        return res
          .status(500)
          .json({ message: "Error fetching disaster articles", error });
      }

      // Forward the response body as is
      res.status(response.statusCode).json(body);
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
