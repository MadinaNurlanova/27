import {Title, Subtitle} from '../UI'
import Container from '../Container'
import classes from './VideoBlock.module.scss'
import React from 'react'
import ReactPlayer from 'react-player'
export default function VideoBlock(){

    return (
        <Container>
            <div className={classes.wrapper}>
        <Title>We are Createx Construction Bureau </Title>
        <Subtitle>We are rightfully considered to be the best construction company in the USA.</Subtitle>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QbJBDABNKxY?si=4Zagxoej0i-tC9Ue" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <ReactPlayer url='https://www.youtube.com/watch?v=QbJBDABNKxY&t=135s' />
            </div>
        </Container>
    )
}