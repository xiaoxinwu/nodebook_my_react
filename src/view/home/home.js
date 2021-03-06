import React, { Component } from 'react';
import {
	Link
} from 'react-router';
import {
	Button
} from 'react-bootstrap';

import '../../style/home.css';
import logo from '../../asset/logo.svg';

import {
	SearchSection,
	HomeTopSection,
	BookList,
	ExclusiveBook
} from '../../component/commonbase';

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home-page">
        {/*首页头部块*/}
				<HomeTopSection/>
				{/*推荐歌单*/}
				<BookList title="推荐书单"/>
				{/*独家*/}
				<ExclusiveBook/>
      </div>
    );
  }
}

 
