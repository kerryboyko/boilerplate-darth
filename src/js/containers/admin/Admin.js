import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

const Admin = (props) =>
      (<div>
          <div>Menu
             <ul>
                  {'add blog post, content, upload files'.split(',').map((el) => <li>{el}</li>)}
             </ul>
          </div>
      </div>)

export default reduxify({}, [], Admin)
