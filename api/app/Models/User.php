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
    protected array $fillable = [
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
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'users';
}
