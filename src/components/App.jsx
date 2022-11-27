import { React, Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getImage } from './Api/Api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    images: [],
    loade: false,
    page: 1,
    name: '',
    search: '',
  };

  // componentDidMount() {
  //   getImage('cat', 1)
  //     .then(data => this.setState({ images: data.hits }))
  //     .then(() => {
  //       this.setState(state => ({
  //         ...state,
  //         loade: false,
  //         name: 'cat',
  //       }));
  //     });
  // }

  onSearch = name => {
    this.setState({
      images: [],
      loade: true,
      page: 1,
      search: '',
    });
    getImage(name, this.state.page)
      .then(data => this.setState({ images: data.hits }))
      .then(() => {
        this.setState(state => ({
          ...state,
          loade: false,
          name: name,
        }));
      });
  };

  onChangeSearch = search => {
    this.setState(state => ({
      ...state,
      search,
    }));
  };

  loadeMore = () => {
    this.setState(state => ({
      ...state,
      loade: true,
    }));
    getImage(this.state.name, this.state.page + 1)
      .then(data =>
        this.setState(state => ({
          ...state,
          images: [...state.images, ...data.hits],
        }))
      )
      .then(() => {
        this.setState(state => ({
          ...state,
          loade: false,
          page: state.page + 1,
        }));
      });
  };

  openModal = (src, alt) => {
    this.setState(state => ({
      ...state,
      src,
      alt,
    }));
    window.addEventListener('keydown', this.keyDown);
  };

  keyDown = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  };

  closeModal = () => {
    this.setState(state => ({
      ...state,
      src: '',
      alt: '',
    }));

    window.removeEventListener('keydown', this.keyDown);
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          onSearch={this.onSearch}
          onChange={this.onChangeSearch}
          search={this.state.search}
        />
        <ImageGallery images={this.state.images} click={this.openModal} />
        {this.state.loade && <Loader />}
        {this.state.images.length > 0 && <Button onClick={this.loadeMore} />}
        {this.state.src && (
          <Modal
            close={this.closeModal}
            src={this.state.src}
            alt={this.state.alt}
          />
        )}
      </div>
    );
  }
}
