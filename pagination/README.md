# Pagination Project

This project implements basic pagination in Python.

## Features

- `index_range(page, page_size)`  
  Returns start and end indexes.

- `get_page(page, page_size)`  
  Returns a page of data from the dataset.

- `get_hyper(page, page_size)`  
  Returns pagination metadata (page, size, next, prev, total pages).

- `get_hyper_index(index, page_size)`  
  Deletion-resilient pagination that avoids skipping data.

## Dataset

- `Popular_Baby_Names.csv`
