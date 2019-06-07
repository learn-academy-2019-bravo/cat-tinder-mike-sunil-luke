import React, {Component} from "react"
import PropTypes from "prop-types"
import ActiveStorageProvider from 'react-activestorage-provider'

class Catvatar extends Component {
  constructor(props){
    super(props)
    const{ cat } = props
    this.state = {
      cat
    }
  }


  handleSubmit = (cat)=>{
    this.setState({ cat })
  }

  render () {
    const{ cat } = this.state
    return (
      <React.Fragment>
        { cat && cat.avatar_url &&
          <div>
            <h2>Your Avatar is: </h2>
            <img src={cat.avatar_url} />
          </div>
        }
        <ActiveStorageProvider
          endpoint={{
            path: `/cats/${cat.id}`,
            model: 'cat',
            attribute: 'avatar',
            method: 'PUT',
          }}
          onSubmit={this.handleSubmit}
          render={({ handleUpload, uploads, ready }) => (
            <div>
              <input
                type="file"
                disabled={!ready}
                onChange={e => handleUpload(e.currentTarget.files)}
              />

              {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return (
                      <p key={upload.id}>Finished uploading {upload.file.name}</p>
                    )
                }
              })}
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

export default Catvatar