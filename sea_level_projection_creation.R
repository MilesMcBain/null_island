# From https://theconversation.com/15-years-from-now-our-impact-on-regional-sea-level-will-be-clear-31821
# Piece-wise linear interpolation.
library(tidyverse)
library(jsonlite)
df <- bind_rows(
    tibble(year = seq(from = 2020, to = 2040), level = seq(from = 0.129, to = 0.187, length.out=21)) %>% print(n = 21),
    tibble(year = seq(from = 2040, to = 2060), level = seq(from = 0.187, to = 0.277, length.out=21)) %>% print(n = 21),
    tibble(year = seq(from = 2060, to = 2080), level = seq(from = 0.277, to = 0.417, length.out=21)) %>% print(n = 21),
    tibble(year = seq(from = 2080, to = 2100), level = seq(from = 0.417, to = 0.607, length.out=21)) %>% print(n = 21)
) 

df <- df[!duplicated(df),]
  
df %>%
    rename(key = year, value = level) %>%
    jsonlite::toJSON() %>%
    jsonlite::prettify() %>% 
    clipr::write_clip()
