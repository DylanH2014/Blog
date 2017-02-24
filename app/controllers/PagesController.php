<?php

class PagesController extends Controller {

	public function getIndex() {

		return View::make('pages.hello');
	}

	public function getAbout() {

		return View::make('pages.about');

	}

	public function getContact() {

		return View::make('pages.contact');

	}

}