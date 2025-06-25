# Intro To Redux 

You’ve built your foundation in state management — now it’s time to wield one of the most powerful tools in the React ecosystem: Redux.



In this module, we’ll explore the why behind Redux, understand its architecture, and demystify how it works under the hood. From grasping unidirectional vs bi-directional data flow, to breaking down the Flux pattern, to setting up your first Redux store and slice — we’ve got it all covered.

💡 Whether Redux once felt too abstract or over-engineered, this module will change that.



By the end, you'll not only be able to set up and use Redux confidently but also understand exactly why and when it makes sense to use it.



Let’s begin by asking the most important question:

"Why Redux?"

## 21-1 Why Redux?
- In frontend state is an important thing. 
- State goes to database and show interaction with data in frontend. 
- we can use zustand, mobx, rxjs, redux, etc we can use.
- Redux is ruling the industry and can generate value fast. 

## 21-2 What Will You Learn?  
- Redux is not just for react.
- Redux can be used with any js library

#### Redux made a package named `React-Redux`
- This is made only for react. combined with wrappers

#### We will basically learn `redux tool kit`
- Legacy redux (old one) did not had `action` and `reduce`. we had to create it by our own.Old Redux was unopinionated 
- Whether redux tool kit is opinionated (used for local state)
- with redux tool kit we get `RTK Query`. Which is used for data fetching. In redux legacy it `Redux Thunk` was used for data fetching

## 21-3 State, Bi-directional, and uni-directional data flow.