import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from "gatsby"


const Testimonials = () => {
    const data = useStaticQuery( graphql`
        query  {
            allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"},
            name: {in: ["test1","test2"]}}) {
            edges {
              node {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
          `)
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What people are saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <h3>Queco</h3>
                        <p>Es un hecho establecido hace demasiado tiempo que un lector se 
                            distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                    </Testimonial>
                    <Testimonial>
                        <h3>Janeth</h3>
                        <p>Es un hecho establecido hace demasiado tiempo que un lector se 
                            distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map( (image,key)=> (
                    <Images key={key} fluid={image.node.childImageSharp.fluid} />
                ))}
                    
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer =  styled.div `
width:100%;
background:#fcfcfc;
color:#000;
padding: 5rem calc((100vw - 1300px) /2);
height:100%;
`

const TopLine =  styled.div `
color:#077bf1;
font-size:1rem;
padding-left:2rem;
margin-bottom:0.75rem;
`

const Description =  styled.div `
text-align:start;
padding-left:2rem;
margin-bottom:4rem;
font-size:clamp(1.5rem, 5vw, 2rem);
font-weight:bold;
`

const ContentWrapper =  styled.div `
display:grid;
grid-template-columns:1fr 1fr;
padding:0 2rem;

@media screen and (max-width:768px)
{
    grid-template-columns:1fr;
}
`

const ColumnOne =  styled.div `
display:grid;
grid-template-rows:1fr 1fr;

`

const ColumnTwo =  styled.div `
display:grid;
grid-template-columns:1fr 1fr;
margin-top:2rem;
grid-gap:18px;

@media screen and (max-width:500px){
    grid-template-columns:1fr;
}

`

const Testimonial =  styled.div `
padding-top:1rem;
padding-right:2rem;

h3 {
    margin-top:1rem;
    font-size:1rem; 
    color:#20284F;   
}

p{
   
}

`

const Images = styled(Img)`
border-radius:10px;
height:100%;
`

