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


  onSearch = name => {
    this.setState(state => ({
      // ...state,
      images: [],
      loade: true,
      page: 1,
    }));
    getImage(name, this.state.page)
      .then(data => {
        this.setState(state => ({
          // ...state,
          images: data.hits,
          loade: false,
          name: name,
        }));
      })
      .catch(console.error);
  };

  onChangeSearch = search => {
    this.setState(state => ({
      // ...state,
      search,
    }));
  };

  loadeMore = () => {
    this.setState(state => ({
      // ...state,
      loade: true,
    }));
    getImage(this.state.name, this.state.page + 1)
      .then(data => {
        this.setState(state => ({
          // ...state,
          images: [...state.images, ...data.hits],
          loade: false,
          page: state.page + 1,
        }));
      })
      .catch(console.error);
  };

  openModal = (src, alt) => {
    this.setState(state => ({
      // ...state,
      src,
      alt,
    }));
  };

  closeModal = () => {
    this.setState(state => ({
      // ...state,
      src: '',
      alt: '',
    }));
  };

  render() {
    const { search, images, loade, src, alt } = this.state;
    return (
      <div className="App">
        <Searchbar
          onSearch={this.onSearch}
          onChange={this.onChangeSearch}
          search={search}
        />
        <ImageGallery images={images} click={this.openModal} />
        {loade && <Loader />}
        {images.length > 0 && <Button onClick={this.loadeMore} />}
        {src && (
          <Modal
            close={this.closeModal}
            src={src}
            alt={alt}
          />
        )}
      </div>
    );
  }
}
