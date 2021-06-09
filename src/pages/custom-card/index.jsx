import { Fragment } from 'react'
import { useState } from 'react'
import Head from 'next/head'
import Navbar from './../../components/Navbar'
import styles from '../../styles/customcard.module.scss'
import Image from 'next/image'
import Scrollme from './../../components/Scrollme'
import React, { useEffect } from 'react'
import { fabric } from 'fabric'

function CustomCard (props) {
  var rect, triangle, circle, canvas, selectValue
  useEffect(() => {
    canvas = new fabric.Canvas('c')
  }, [])
  const addShape = () => {
    rect = new fabric.Rect({
      originX: 'left',
      left: 200,
      fill: 'red',
      width: 200,
      height: 200,
      angle: 45
    })
    triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: 'blue',
      left: 50,
      top: 50
    })
    circle = new fabric.Circle({
      radius: 20,
      fill: 'green',
      left: 100,
      top: 100
    })

    if (selectValue === 'rect') {
      canvas.add(rect)
    } else if (selectValue === 'triangle') {
      canvas.add(triangle)
    } else if (selectValue === 'circle') {
      canvas.add(circle)
    }
  }

  const removeShape = () => {
    canvas.remove(canvas.getActiveObject())
    console.log(canvas.getObjects())
  }

  const handleChange = event => {
    selectValue = event.target.value
    console.log(selectValue)
  }

  var row_center = `row m-0 p-0 justify-content-center`
  var row_default = `row m-0 p-0`
  var col = `text-center m-0 p-0`

  return (
    <Fragment>
      <Head>
        <title> Your Custom Card</title>
        <meta name='description' content='Customize your Card' />
      </Head>
      <div className='container-fluid m-0 p-0 mb-4'>
        {/* TEXT */}
        <div className='row justify-content-center mt-4'>
          <div className='col-12 col-md-6 mt-4'>
            <h1 className={`${styles.cen} ${styles.cardSlogan}`}>
              Customize your Card:
            </h1>
          </div>
        </div>
        {/* INNER PART */}
        <div className={`${row_center}`}>
          <div className={`${col} col-11`}>
            <select onChange={handleChange}>
              <option key='?' value={null}>
                Select..
              </option>
              <option key='rect' value='rect'>
                Rectangle
              </option>
              <option key='triangle' value='triangle'>
                Triangle
              </option>
              <option key='circle' value='circle'>
                Circle
              </option>
            </select>
            <button onClick={addShape}>Add shape</button>
            <button onClick={removeShape}>Remove selected shape</button>
            <canvas id='c' width={600} height={400} />
          </div>
        </div>
      </div>
      <Scrollme />
    </Fragment>
  )
}

export default CustomCard
