const React = require('react');
const {Link} = require('react-router')

let Examples = (props) => {
    return (
            <div>
                <h1 className="text-center page-title">Examples</h1>
                <p>Here some locations as an example:</p>
                <ol>
                    <li>
                    <Link to='/?city=London'>London, UK</Link>
                    </li>
                    <li>
                    <Link to='/?city=Milan'>Milan, IT</Link>
                    </li>
                    <li>
                    <Link to='/?city=Melburn'>Melburn, AUS</Link>
                    </li>
                </ol>
           </div>
        )
} 

module.exports = Examples;