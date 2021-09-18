import React from 'react'
import Card from './Card'
import q2 from './images1/q2.jpg'
import q1 from './images2/q1.jpg'
import Grid from '@material-ui/core/Grid';
export default function TestComponent() {
  return (
    <div >
      <h3> Test you Knowledge</h3>
      <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
>
      <Card  text={'Test 1'} categorie={"Code/B"} img={q2} lien={"/main/candidate/Test/test1"}/>
      <Card  text={'Test 2'} categorie={"Code/B"} img={q1} lien={"/main/candidate/Test/test2"}/>
      <Card  text={'Test 3'} categorie={"Code/E"} img={q1} lien={"/main/candidate/Test/test1"}/>
</Grid>
     
    </div>
  )
}
