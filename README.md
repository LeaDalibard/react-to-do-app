# Title: React To-to-list
- Type of Challenge: `Learning Challenge`
- Team challenge : `solo`

## Learning objectives
- Consolidated knowledge of react basics
- Learn to make React Components
- React Developper tool


## Source : 

**[Ibaslogic](https://ibaslogic.com/react-tutorial-for-beginners/)**


### Tips :

- `<React.fragment> </React.Fragment>`  (Shortcut : <></>) : virtual element not shown in the DOM, allowed to return more than one JSX element

- Handling form that has more than one text input field :
`onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};`

### Notes :

Component names in React must be capitalized so that its instance in JSX is not considered as DOM/HTML tag.

**Prop drilling** : Getting data from component A down to component B through the props. Where component A is the parent of B.

When you map through something, a list is created => React wants each child in the list to have a unique key prop.

PrevState : updater function to the setState(), receive the previous version of the state as its parameter.
