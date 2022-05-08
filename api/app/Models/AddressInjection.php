<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddressInjection extends Model
{
    use HasFactory;

    /**
     * The address will inject vaccination all-day
     */
    const TIME_All_DAY = 1;

    /**
     * The address will inject vaccination in the morning.
     */
    const TIME_MORNING = 2;

    /**
     * The address will inject vaccination in the afternoon.
     */
    const TIME_AFTERNOON = 3;

    /**
     * Time inject vaccination
     *
     * @var array
     */
    public static $timInject = [
        self::TIME_All_DAY => 'Cả ngày',
        self::TIME_MORNING => 'Buổi sáng',
        self::TIME_AFTERNOON => 'Buổi chiều',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected array $fillable = [
        'ward_id',
        'name',
        'time',
        'date',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date' => 'datetime',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'address_injections';
}
