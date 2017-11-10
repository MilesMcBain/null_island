library(tidyverse)
library(jsonlite)
sealeveldata <- read_csv('./data/734-004_MeanSeaLevelTrends.csv')

JSON_sealevel_map <-
    sealeveldata %>%
    group_by(Year) %>%
    summarise(Linear_Trend = max(Linear_Trend)) %>%
    filter(Year >= 1974) %>%
    transmute(key = Year,
    value = Linear_Trend - .data$Linear_Trend[[1]]) %>%
    jsonlite::toJSON()

JSON_sealevel_map %>% jsonlite::prettify() %>% clipr::write_clip()