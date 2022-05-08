<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalHistory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected array $fillable = [
        'user_id',
        'symptom',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected string $table = 'medical_histories';
}
