# evlist

https://ev-list.herokuapp.com/

List of top electric vehicles available in British Columbia, Canada. Includes information about how owning an electric vehicle may be beneficial for you. All information and vehicle images are from https://electricvehicles.bchydro.com/.

This website was made using React.js and Node.js. Context API was used for state management. The server has an API that returns a list of vehicle data for the vehicle listing page, and a list of top category car data for the homepage.

### Data Fetching
Data is fetched only once through the entire website visit. Upon first visiting the homepage, the data for the top category cars are fetched. Upon visiting the vehicle listings page, the listing data are fetched. When navigating to other pages and back to the homepage or listing page, no fetching would be done. Images are cached by the web browser.


### Listing page functionalities
#### Views
A single column list view or a grid-like view.

#### Sort By
- low price
- high price
- range

#### Compare
A modal that allows a selection of 2 vehicles to display side by side.
