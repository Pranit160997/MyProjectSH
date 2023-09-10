# pranit-sh-project

*This is a forked repository that contains changes and feedback for the original repository.*

### Overall Comments
- **RTK caching**: I like the idea of creating a mini-server with the help of a library we didn't discuss before. Your RTK wrappers for this server was implemented correctly with an exception to how caching was handled. I have made some changes to how caching is handled and added comments describing the reason behind each change [here](./client/src/services/contactsApi.tsx).
- **RTK usage**: I examined the places where you used the RTK hooks you built. I am glad you took advantage of many of the RTK states (ex: isFetching, isLoading, etc.) to conditionally render the page instead of just displaying the data.
- **style inconsistency**: in some files, I notice a mix of tab sizes and lines that do not line up with their tabs despite being in the same scope
- **duplicate Redux store**: read more about this [here](./client/src/app/comments.md)
- **looking for more than just buttons**: read more about this [here](./client/src/components/comments.md)

### Miscellaneous Comments
- As you may notice from looking at this repository, the code for your server has been extracted to a directory that is not directly under the folder containing all front-end related code.
- The directory originally containing your server code included a `node_modules` folder, but it has been removed and added to an .gitignore to avoid future inclusions. Please remember that it is highly recommended for folders like `node_modules` to never be included inside repository code unless it is absolutely necessary with no workaround.
- If you have time, I am hoping you add some UI components that utilizes the react-hook-form library so you can give more control to the user in deciding what contacts to add, update, and delete.
- If you have time, I am hoping you also add some pages, preferably >=1 nested one to demonstrate your understanding of how we organize code related to different pages
