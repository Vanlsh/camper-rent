# Camper Rental Application

## How to Start

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Vanlsh/camper-rent.git
   cd camper

   ```

2. **Install dependencies**:
   `npm install`
3. **Start the development server**:
   `npm run dev `

## Overview

A web application for renting campers in Ukraine, featuring:

1. **Home Page**: Overview of services.
2. **Catalog Page**: Camper listings with filtering options.
3. **Favorites Page**: User's favorite camper listings.

## Backend

- **MockAPI**: Use [mockapi.io](https://mockapi.io/) for backend. Create a resource with fields like `_id`, `name`, `price`, `rating`, etc. Populate with at least 13 diverse listings.
- **Pagination**: Implement with 4 listings per page.

## Routing

- **"/"**: Home page.
- **"/catalog"**: Camper catalog.
- **"/favorites"**: User's favorites.
