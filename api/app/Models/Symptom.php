<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symptom extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected array $fillable = [
        'vacc_order_register_id',
        'descriptions',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'symptoms';
}
