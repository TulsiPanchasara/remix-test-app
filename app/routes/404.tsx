import { Links, Meta, Scripts } from "remix"

export default function errorIndex( ) {
    // console.log('error',error)
    return (
        <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
                {/* add the UI you want your users to see */}
                <div>Oops! Soething went wrong</div>
        <Scripts />
      </body>
    </html>
    )
}