# `/app` Comments

I see that you are setting up your Redux store here along with a file that contains type-customized Redux hooks to access slices of the store.

My only critique is that there is another file located directly outside this directory that is called `store.tsx`. In that file, I notice another configuration of a store that also includes the RTK middlewares. When I checked how things were being linked together, it appears that the store inside this folder is not being used whatsoever within the actual application.

In general, it is not recommended to have more than one Redux store in a single application - even if you are using a store just for testing like what you are currently doing here. Please refer to this [post](https://stackoverflow.com/questions/33619775/redux-multiple-stores-why-not) for a better explanation.
