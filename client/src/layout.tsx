import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Root = () => {

    return (
      <>
        <Suspense fallback='loading'>
            <Outlet/> {/* placeholder */}
        </Suspense>
          
        
      </>
    )
    }