<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fullname',
        'cmnd_cccd',
        'img_cmnd_cccd_truoc',
        'img_cmnd_cccd_sau',
        'district',
        'ward',
        'phone',
        'password',
        'role_id',
        'img_signature',
        'gender',
        'job',
        'workplace',
        'email',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'date:d-m-Y',
        'updated_at' => 'date:d-m-Y',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * Get img_cmnd_cccd_truoc attribute
     *
     * @param string $value Value
     *
     * @return string
     */
    public function getImgCmndCccdTruocAttribute($value)
    {
        if ($value) {
            return env('APP_URL') . '/' . $value;
        }

        return null;
    }

    /**
     * Get img_cmnd_cccd_sau attribute
     *
     * @param string $value Value
     *
     * @return string
     */
    public function getImgCmndCccdSauAttribute($value)
    {
        if ($value) {
            return env('APP_URL') . '/' . $value;
        }

        return null;
    }

    /**
     * Get img_signature attribute
     *
     * @param string $value Value
     *
     * @return string
     */
    public function getImgSignatureAttribute($value)
    {
        if ($value) {
            return env('APP_URL') . '/' . $value;
        }

        return null;
    }
}
