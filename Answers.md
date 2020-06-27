1. What problem does the context API help solve?

    context api allows you easy access to different levels of a component tree with using props

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions: describes the type of action is taking place and updates state
    reducers: takes the action and the state to return a new updated state
    store: it holds the state

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state is the global state that the whole application has access to. You use the application state when you want
    the whole app to have access to the state
    and component state is the state only the component has access to, you would use it when you only want the component to hold the state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk allows us to return functions from our action-creators then those functions can handle api calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    my favorite state management currently is redux. Its been hard to learn it however I like using actions and reducers to handle state
    it seems efficient. 