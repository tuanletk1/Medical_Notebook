<?php

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

if (!function_exists('currentUserLogin')) {

    /**
     * Get current user login
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    function currentUserLogin()
    {
        return \Illuminate\Support\Facades\Auth::user();
    }
}

if (!function_exists('saveFile')) {

    /**
     * Save file
     *
     * @param UploadedFile $file File.
     *
     * @return string
     */
    function saveFile(UploadedFile $file)
    {
        $filename = Str::uuid() .'.' . $file->getClientOriginalExtension();
        $savePath = '/images';

        return Storage::putFile($savePath, $file);
    }
}
