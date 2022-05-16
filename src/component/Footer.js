import React from 'react'

export default function footer() {

  const year=new Date().getFullYear()
  // console.log(year);
  return (
    <div>
        <footer>
            <p>
                copyright@{" "+ year}
            </p>
        </footer>
    </div>
  )
}
