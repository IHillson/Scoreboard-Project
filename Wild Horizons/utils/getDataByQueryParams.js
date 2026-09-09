export const getDataByQueryParams = (data, locationType, locationName, status) => {
    return data.filter(destination => {
        const locationMatch = destination[locationType].toLowerCase() === locationName.toLowerCase();
        const statusMatch = status ? destination.is_open_to_public === (status.toLowerCase() === "true") : true;
        return locationMatch && statusMatch;
    })
}
